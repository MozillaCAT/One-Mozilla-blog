<?php $theme_options = onemozilla_get_theme_options(); ?>

  </div><!-- #content -->
</div></div><!-- /.wrap /#page -->

<footer id="site-info" role="contentinfo">
  <div class="wrap">
    <p id="foot-logo">
      <a class="top" href="#page"><?php _e('Return to top', 'onemozilla'); ?></a>
      <a class="logo logocat" href="http://mozilla.cat" rel="external">Mozilla en català</a>
      <a class="logo logomoz" href="http://mozilla.org" rel="external">Mozilla</a>
      <a class="logo logosc" href="http://www.softcatala.org" rel="external">Softcatalà</a>
    </p>

    <p id="colophon">
      <?php printf(__('Except where otherwise <a href="%1s" rel="external">noted</a>, content on this site is licensed under the <a href="%2s" rel="external license">Creative Commons Attribution Share-Alike License v3.0</a> or any later version.', 'onemozilla'), esc_attr('http://www.mozilla.org/en-US/about/legal.html#site'), esc_attr('http://creativecommons.org/licenses/by-sa/3.0/') ); ?>
    </p>

    <nav id="nav-meta">
      <ul role="navigation">
        <li><a href="http://www.mozilla.cat/qui-som/" rel="external">Qui som</a></li>
        <li><a href="http://www.mozilla.cat/col·laboreu-hi/" rel="external">Col·laboreu-hi</a></li>
      </ul>
    </nav>

  </div>
</footer>

<!-- <script src="https://www.mozilla.org/tabzilla/media/js/tabzilla.js"></script> -->

<?php wp_footer(); ?>

</body>
</html>
