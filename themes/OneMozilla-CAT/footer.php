<?php $theme_options = onemozilla_get_theme_options(); ?>

  </div><!-- #content -->
</div></div><!-- /.wrap /#page -->

<footer id="site-info" role="contentinfo">
  <div class="wrap">
    <p id="foot-logo">
      <a class="top" href="#page"><?php _e('Return to top', 'onemozilla'); ?></a>
      <a class="logo logomoz" href="http://www.mozilla.org/community/" rel="external">Mozilla</a>
      <a class="logo logosc" href="http://www.softcatala.org" rel="external">Softcatalà</a>
    </p>

    <p id="colophon">
      <?php printf(__('Except where otherwise <a href="%1s" rel="external">noted</a>, content on this site is licensed under the <a href="%2s" rel="external license">Creative Commons Attribution Share-Alike License v3.0</a> or any later version.', 'onemozilla'), esc_attr('http://www.mozilla.org/en-US/about/legal.html#site'), esc_attr('http://creativecommons.org/licenses/by-sa/3.0/') ); ?><br >Tema <a href="https://github.com/MozillaCAT/One-Mozilla-blog/">basat en OneMozilla</a>.
    </p>

   <?php wp_nav_menu( array( 'theme_location' => 'nav_footer', 'container' => 'nav', 'container_id' => 'nav-meta', 'fallback_cb' => 'false', ) ); ?>

  </div>
</footer>
<script src="https://www.mozilla.org/tabzilla/media/js/tabzilla.js"></script>

<?php wp_footer(); ?>

</body>
</html>
