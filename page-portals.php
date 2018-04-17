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

		<main id="main" class="site-main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				$images = get_field('portals_one');
				$size = 'full'; // (thumbnail, medium, large, full or custom size)
				$i    = 0;

				if( $images ): ?>

				
				<section class="gallery">
				<ul class="gallery_portals">
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
