<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Sassen
 */

get_header(); ?>

	<div id="primary-info" class="content-area">
		<main id="main-info" class="site-main info-main">
			<div class="pre-loader pre-load-hide"></div>
				<section class="info-intro">
				<?php 
				$image = get_field('info_image');
				if( !empty($image) ): ?>
					<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
				<?php endif; ?>
				</section>

				<section class="info-details">
					<div class="about">
						<?php the_field('about_details'); ?>
					</div>
					<div class="contact">
						<?php the_field('contact_details'); ?>
					</div>
				</section>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
