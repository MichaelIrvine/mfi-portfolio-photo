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

	<div id="primary-front-page" class="content-area-front-page">
		<main id="main-front-page" class="site-main front-page-main">
			<div class="pre-loader pre-load-hide"></div>
			
			<!-- Gallery One -->
			<div class="fp-gallery-one-container">
			<?php 

			$fpGalleryOne = get_field('fp_gallery_one');
			
			if( $fpGalleryOne ): ?>
				<ul class='fp-gallery-one'>
					<?php foreach( $fpGalleryOne as $image ): ?>
						<li>
							<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>"/>
						</li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
			</div> <!-- End of fp=gallery-one -->

			<!-- Gallery Two -->
			<div class="fp-gallery-two-container">
			<?php 

			$fpGalleryTwo = get_field('fp_gallery_two');
			
			if( $fpGalleryTwo ): ?>
				<ul class='fp-gallery-two'>
					<?php foreach( $fpGalleryTwo as $imageTwo ): ?>
						<li>
							<img src="<?php echo $imageTwo['url']; ?>" alt="<?php echo $imageTwo['alt']; ?>"/>
						</li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
			</div> <!-- End of fp-gallery-two -->

			<!-- Gallery Two -->
			<div class="fp-gallery-three-container">
			<?php 

			$fpGalleryThree = get_field('fp_gallery_three');
			
			if( $fpGalleryThree ): ?>
				<ul class='fp-gallery-three'>
					<?php foreach( $fpGalleryThree as $imageThree ): ?>
						<li>
							<img src="<?php echo $imageThree['url']; ?>" alt="<?php echo $imageThree['alt']; ?>"/>
						</li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
			</div> <!-- End of fp-gallery-three -->


		</main><!-- #main -->
	</div><!-- #primary -->
	<!-- <div><h1>hello worms</h1></div> -->
<?php
get_sidebar();
get_footer();
