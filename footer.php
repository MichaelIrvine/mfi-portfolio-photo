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
	<div class="mobile-cover">	
		
		<?php
			wp_nav_menu( array(
				'theme_location' => 'mobile',
				'menu_id'        => 'menu-3'
			));
		?>
		
	</div> <!-- end of .mobile-cover --> 
			  
	<div class="round-btn">
		<div class="rel">
			<span></span>
			<span></span>
		</div>
	</div>	  
		  
		<div class="site-info">

		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
