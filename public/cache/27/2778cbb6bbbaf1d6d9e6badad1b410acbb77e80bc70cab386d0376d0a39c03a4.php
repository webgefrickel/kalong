<?php

/* components/icon/icon.html */
class __TwigTemplate_9ae640206be7d7173025fc591d169260d2f7712368670661aa6a4092642c2ff8 extends Twig_Template
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
        echo "<svg class=\"icon  icon--";
        echo twig_escape_filter($this->env, ($context["icon"] ?? null), "html", null, true);
        echo "\">
  <use xlink:href=\"";
        // line 2
        echo twig_escape_filter($this->env, call_user_func_array($this->env->getFilter('path')->getCallable(), array("/images/sprite.svg")), "html", null, true);
        echo "#icon--";
        echo twig_escape_filter($this->env, ($context["icon"] ?? null), "html", null, true);
        echo "\"/>
</svg>
";
    }

    public function getTemplateName()
    {
        return "components/icon/icon.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  24 => 2,  19 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "components/icon/icon.html", "/Users/webgefrickel/Sites/__dev/kalong/public/assets/patterns/components/icon/icon.html");
    }
}
