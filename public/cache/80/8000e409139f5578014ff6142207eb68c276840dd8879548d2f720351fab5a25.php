<?php

/* globals/logo/logo.html */
class __TwigTemplate_eade12232ac8daf7d4a6f98073782903d36c8575321bc714b83f06646d342419 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<a href=\"/\" class=\"logo\" title=\"";
        echo twig_escape_filter($this->env, ($context["label"] ?? null), "html", null, true);
        echo "\">
  ";
        // line 2
        var_dump("@icon--logo");
        // line 3
        echo "</a>
";
    }

    public function getTemplateName()
    {
        return "globals/logo/logo.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  26 => 3,  24 => 2,  19 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "globals/logo/logo.html", "/Users/webgefrickel/Sites/__dev/kalong/public/assets/patterns/globals/logo/logo.html");
    }
}
