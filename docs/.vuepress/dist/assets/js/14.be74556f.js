(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{358:function(e,n,t){"use strict";t.r(n);var o=t(43),a=Object(o.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"best-practices-sf4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practices-sf4"}},[e._v("#")]),e._v(" Best Practices SF4")]),e._v(" "),t("p",[e._v("Symfony 4: Best Practices\nFabien Potencier\nApril 07, 2017")]),e._v(" "),t("p",[e._v("Any major version of a project is an opportunity to revisit its best practices. Modernizing them. Adapting them to the project's new features. Symfony 4 is no exception.\nStandardization first")]),e._v(" "),t("p",[e._v("Symfony 4 will be an evolution of the current practices, trying to embrace more standard tools.")]),e._v(" "),t("p",[e._v("Symfony strives to embrace PHP and web standards. It is hard to believe that Symfony 2 started at a time when Composer did not exist. Since then, the PHP community started the Fig group, which adopted several recommendations. Symfony was one of the first major frameworks to adopt most of the PSRs, without breaking backward compatibility. PSR-3 for logging many years ago. PSR-4 for autoloading. More recently, PSR-6 for caching. The next version of Symfony, version 3.3, implements PSR-16 for caching and the brand new PSR-11 for containers interoperability. We might even have a use case for PSR-13.")]),e._v(" "),t("p",[e._v("Using standards help with interoperability but also with decoupling your code from the framework.\nBundle-less Applications")]),e._v(" "),t("p",[e._v("The move to bundle-less applications was explained in the previous blog post. I mention it here again as this is an important change in the current set of best practices.\nEnvironment Variables")]),e._v(" "),t("p",[e._v("The current Symfony best practices book explains in great detail how to create configuration settings in a Symfony application. When to use app/config/parameters.yml for infrastructure-related configuration or app/config/config.yml for application-related configuration.")]),e._v(" "),t("p",[e._v("I would go as far as recommending to avoid using app/config/config.yml as much as possible. There are valid use cases, but I can count them on one hand.")]),e._v(" "),t("p",[e._v("Symfony 4 won't have the equivalent of app/config/parameters.yml. Use environment variables instead. This is what most frameworks do in other languages. This is also one of the recommendations of the 12-Factor Application Manifesto. One that is encouraged by many modern hosting platforms.")]),e._v(" "),t("p",[e._v('Using environment variables, while far from being perfect, have many benefits over what we currently do. Environment variables are a more "standard" way of managing settings that depend on the environment (no need to manage a parameters.yml.dist for instance). Environment variables can be read by several applications as they are independent of your code, framework, and language. Environment variables help with read-only filesystem deployment as they are decoupled from your code. Environment variable values can be changed "dynamically" without redeploying your application (clearing the cache for Symfony). Last, but not least, environment variables can be managed by existing tools.')]),e._v(" "),t("p",[e._v('Note that storing secrets in environment variables is not more "secure" than storing them in a configuration file.')]),e._v(" "),t("p",[e._v('As using environment variables can be cumbersome in development, using a "standard" .env file is easier and recommended. Symfony 3.3 comes with a new Dotenv component that will be used by default in Symfony 4 applications. Switching between a .env file and "real" environment variables will be done automatically and transparently.')]),e._v(" "),t("p",[e._v("Note that you can also define environment variables in a parameters.yaml file if that feels better to you. That won't be the recommended way though. Note that parameters.yaml is not a typo of parameters.yml! This is another change in Symfony 4 which will be discussed in a later article.")]),e._v(" "),t("p",[e._v("As a nice side effect, it helps simplify how the Symfony environment and debug flag are handled by both console and web applications.")]),e._v(" "),t("p",[e._v("Currently, the Symfony console tool can take the environment and the debug flag via the --env and --no-debug flags. Or alternatively via the SYMFONY_ENV and SYMFONY_DEBUG environment variables.")]),e._v(" "),t("p",[e._v("With Symfony 4, this is no longer needed. APP_ENV and APP_DEBUG can be used for both the web front controller and the console tool.")]),e._v(" "),t("p",[e._v("No more ./bin/console foo:bar --env=prod --no-debug or SYMFONY_ENV=prod SYMFONY_DEBUG=0 ./bin/console foo:bar. Just use ./bin/console foo:bar.")]),e._v(" "),t("p",[e._v("It just works. In development and on production servers.")]),e._v(" "),t("p",[e._v("Symfony 4 is full of such simplifications.\nUnified Web Front Controller")]),e._v(" "),t("p",[e._v("Symfony 3 has two web front controllers. One optimized for production. One optimized for development. Symfony 4 only uses one. No need to remove the development web front controller anymore. No more security issue if you forget.")]),e._v(" "),t("p",[e._v('You would think that the code is more complex than before. This is not even the case as we were able to remove a lot of "legacy" code. Thanks to environment variables. Thanks to PHP 7 and the removal of the bootstrap and class caches. Thanks to Symfony 3.3 which removes the need for a specific autoloader.\nMakefile')]),e._v(" "),t("p",[e._v("Many projects have some custom scripts: a wrapper to run unit or integration tests, a script that runs the PHP built-in server, and more. Scripts for which writing a Symfony console command would not make sense.")]),e._v(" "),t("p",[e._v("For convenience, you might have defined them in your application composer.json file. Silex does that with a script entry that runs the PHP built-in server. But that comes with many problems like timeouts or non-support for ANSI escape codes.")]),e._v(" "),t("p",[e._v("Centralizing commands helps with discoverability though. What about using a Makefile instead? This is perhaps the most controversial feature of Symfony 4. I went back and forth. But I'm convinced it brings a lot of value and help solve some issues.")]),e._v(" "),t("p",[e._v('make is a well-known "standard" tool. It is more powerful than scripts run by Composer. It does not rely on PHP. Use it to ease deployment, to connect to remote servers via SSH, to run Blackfire test scenarii. Use it to run npm, gulp, webpack, you named it. Tasks where using Symfony commands is not practical nor desirable.')]),e._v(" "),t("p",[e._v("Profit from executing recipes in parallel. Don't run tasks if nothing changed. Make is powerful.")]),e._v(" "),t("p",[e._v("Let's take one example, cache clearing. Symfony has a command to clear and warmup the cache. Doing both in the same process does not work well as PHP can not reload a class if it changed. But this is easy to achieve with make:")]),e._v(" "),t("p",[e._v("cache-clear:\n@test -f bin/console && bin/console cache:clear --no-warmup || rm -rf var/cache/*\n.PHONY: cache-clear")]),e._v(" "),t("p",[e._v('cache-warmup: cache-clear\n@test -f bin/console && bin/console cache:warmup || echo "cannot warmup the cache (needs symfony/console)"\n.PHONY: cache-warmup')]),e._v(" "),t("p",[e._v("As another example, most of my PHP projects have two tasks that help run Blackfire tests:")]),e._v(" "),t("p",[e._v("bf-dev:\nblackfire-player --endpoint=http://"),t("code",[e._v("bin/console server:status --filter=address")]),e._v(" run tests/bkf/all.bkf\n.PHONY: bf-dev")]),e._v(" "),t("p",[e._v('bf-prod:\nblackfire-player --endpoint=https://twig.sensiolabs.org run tests/bkf/all.bkf --variable="env=prod"\n.PHONY: bf-prod')]),e._v(" "),t("p",[e._v('Want to switch to an application to "maintenance" mode? Use make, not a Symfony command.\nAssets Management')]),e._v(" "),t("p",[e._v("Assetic was removed in Symfony Standard Edition 3.0. We currently don't recommend any replacements as the JavaScript world is still working on a \"standard\" tool. But Symfony 4 will make a recommendation and provide some deep integration. More on that in a few weeks. Still, I wanted to mention it as we also support assets being symlinks/copied from bundles to web/bundles/ via assets:install, but that's probably something that won't survive Symfony 5. Especially as we have a bundle-less application structure now.")]),e._v(" "),t("p",[e._v("Supporting the new best practices has some impact on the directory structure, which next post's topic. Stay tuned!")])])}),[],!1,null,null,null);n.default=a.exports}}]);