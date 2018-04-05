<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Sassen
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
			
			<?php
				wp_nav_menu( array(
					'theme_location' => 'mobile',
					'menu_id'        => 'menu-3'
				));
			?>

			<button class="btn-menu" id="btn-menu">
				<span class="linetop"></span>
				<span class="menu">MENU</span>
				<span class="linebottom"></span>
			</button>
		<div class="site-info">

		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
