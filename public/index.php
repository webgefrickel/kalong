<?php
// This is just an example of how to use the styleguide, the patterns
// from therein and create a full working page out of it. Usually you
// would use a CMS of any sort, load Twig and all patterns and then
// play lego.

require_once dirname(__FILE__) . '/vendor/autoload.php';
$assets = '/assets/';
$patternPath = dirname(__FILE__) . '/site/patterns/';

$pathFilter = new Twig_Filter('path', function ($path) use ($assets) {
  return $assets . trim($path, '/');
});

class RenderPattern_Node extends Twig_Node implements Twig_NodeOutputInterface
{
  public function __construct(
    Twig_Node_Expression $expr,
    Twig_Node_Expression $variables = null,
    $lineno,
    $tag = null
  ) {
    $nodes = array('expr' => $expr);
    if ($variables !== null) {
      $nodes['variables'] = $variables;
    }

    parent::__construct($nodes, [], $lineno, $tag);
  }

  public function compile(Twig_Compiler $compiler)
  {
    $compiler->addDebugInfo($this);
    $this->addGetTemplate($compiler);
    $compiler->raw('->display(');
    $this->addTemplateArguments($compiler);
    $compiler->raw(");\n");
  }

  protected function addGetTemplate(Twig_Compiler $compiler)
  {
    $patternPath = dirname(__FILE__) . '/site/patterns/';
    $patternString = $this->getNode('expr')->attributes['value'];
    $parts = explode('--', $patternString);
    $this->pattern = trim($patternString, '@');
    $this->variant = null;
    $this->file = null;

    if (count($parts) === 2) {
      $this->pattern = trim($parts[0], '@');
      $this->variant = $parts[1];
    }

    $files = new RecursiveDirectoryIterator($patternPath);
    foreach (new RecursiveIteratorIterator($files) as $file) {
      if (strpos($file, $this->pattern . '.html') !== false) {
        $this->file = str_replace($patternPath, '', $file);
      }
    }

    $compiler
      ->write('$this->loadTemplate(')
      ->repr($this->file)
      ->raw(', ')
      ->repr($this->getTemplateName())
      ->raw(', ')
      ->repr($this->getTemplateLine())
      ->raw(')');
  }

  protected function addTemplateArguments(Twig_Compiler $compiler)
  {
    // TODO add variant data :!@)(#%^*
    // echo '<pre>' . var_dump($this->variant) . '</pre>';

    if (!$this->hasNode('variables')) {
      $compiler->raw('$context');
    } else {
      $compiler
        ->raw('array_merge($context, ')
        ->subcompile($this->getNode('variables'))
        ->raw(')');
    }
  }
}

class RenderPattern_TokenParser extends Twig_TokenParser
{
  public function parse(Twig_Token $token)
  {
    $expr = $this->parser->getExpressionParser()->parseExpression();
    list($variables) = $this->parseArguments();
    return new RenderPattern_Node($expr, $variables, $token->getLine(), $this->getTag());
  }

  protected function parseArguments()
  {
    $stream = $this->parser->getStream();

    $variables = null;
    if ($stream->nextIf(Twig_Token::PUNCTUATION_TYPE, ',')) {
      $variables = $this->parser->getExpressionParser()->parseExpression();
    }

    $stream->expect(Twig_Token::BLOCK_END_TYPE);
    return array($variables);
  }

  public function getTag()
  {
    return 'render';
  }
}

$twigLoader = new Twig_Loader_Filesystem($patternPath);
$twig = new Twig_Environment($twigLoader, [
  'cache' => false,
]);

$twig->addFilter($pathFilter);
$twig->addTokenParser(new RenderPattern_TokenParser());
?>

<?php $context = [
  // set debug to true for testing purposes
  'debug' => true,

  'site' => [
    'lang' => 'de',
    'dir' => 'ltr',
    'title' => 'Kalong Test',
    'description' => 'Meta-Description',
  ],

  'global' => [],

  'sprite' => '/assets/images/sprite.svg',
  'logolabel' => 'Test',
]; ?>

<?= $twig->render('page.html', $context); ?>
