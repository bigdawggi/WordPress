var ThemeViewer;(function(a){ThemeViewer=function(b){function d(){var f=a("#filters :checked").length;var g=a("#filter-click").text();if(g.indexOf("(")!=-1){g=g.substr(0,g.indexOf("("))}if(f==0){a("#filter-click").text(g)}else{a("#filter-click").text(g+" ("+f+")")}}function e(){a("#filter-click, #mini-filter-click").unbind("click").click(function(){a("#filter-click").toggleClass("current");a("#filters").slideToggle();a("#current-theme").slideToggle(300);return false});a("#filters :checkbox").unbind("click").click(function(){d()});a("p.tags a").unbind("click").click(function(){a("p.tags a").unbind("click").click(function(){slow_down();return false});a(".loading").fadeIn();a(".random-info").fadeOut();var f=this.href.replace(/.*?s=(.*?)#.*/,"$1");if(a('input[value="'+f+'"]').length>0){a('input[value="'+f+'"]').attr("checked",a('input[value="'+f+'"]').attr("checked")?false:true);d()}else{a("input[name=s]").val(f)}opts.search=a("input[name=s]").val();opts.order=document.location.href.match(/order=(\w*)/)?document.location.href.match(/order=(\w*)/)[1]:"random";a("#availablethemes td").fadeTo(500,0.1,function(){a("#availablethemes td img").hide()});return false})}var c={init:e};return c}})(jQuery);jQuery(document).ready(function(a){theme_viewer=new ThemeViewer();theme_viewer.init()});