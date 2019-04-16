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

	<div id="primary-portraits" class="content-area">
		<main id="main-portraits" class="site-main portraits-main">
			<div class="pre-loader pre-load-hide"></div>

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				$images = get_field('projects_gallery');
				$size = 'full'; // (thumbnail, medium, large, full or custom size)
				$i    = 0;

				if( $images ): ?>

				<section class="gallery">
				<ul class="gallery-list">
				<?php foreach( $images as $image ): ?>
					<li class="items item<?php echo $i++; // increment it! ?>">
						<?php 
							echo wp_get_attachment_image( $image['ID'], $size );
						?>
					</li>					
				<?php endforeach; ?>
				</ul>
				</section>
					
				<?php endif; ?>

			<?php
			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
