<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * Template: front-page
 * 
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Sassen
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<?php
			while ( have_posts() ) : the_post();

			get_template_part( 'template-parts/content', 'page' );

			$images = get_field('project_image');

			if( $images ): ?>
				<ul>
					<?php foreach( $images as $image ):?>
					
						<li>
							<a href="<?php echo $image['url']; ?>">
								<img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>" />
							</a>
							<p><?php echo $image['caption']; ?></p>
						</li>
					<?php endforeach; ?>
				</ul>


			<?php endif; ?>

			<?php
				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
