<?php
/**
 * Sassen functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Sassen
 */

if ( ! function_exists( 'sassen_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function sassen_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Sassen, use a find and replace
		 * to change 'sassen' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'sassen', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1'  => esc_html__( 'Primary', 'sassen' ),
			'mobile'  => esc_html__('Mobile', 'sassen'),
			'special' => esc_html__('Special', 'sassen' )
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'sassen_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'sassen_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function sassen_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'sassen_content_width', 640 );
}
add_action( 'after_setup_theme', 'sassen_content_width', 0 );







/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function sassen_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'sassen' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'sassen' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'sassen_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function sassen_scripts() {
	wp_enqueue_style( 'sassen-style', get_stylesheet_uri() );

	wp_enqueue_script("jquery");

	// wp_enqueue_script( 'sassen-script', get_template_directory_uri() . '/js/sassenscript.js', array(), '20180417', true );

	wp_enqueue_script( 'sassen-script-main', get_template_directory_uri() . '/js/main.js', array(), '20190408', true );

	// wp_enqueue_script( 'sassen-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'sassen-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
	// Adobe Fonts
	wp_enqueue_style('sassen-adobe-fonts', "https://use.typekit.net/azw4qky.css");

	
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

}

add_action( 'wp_enqueue_scripts', 'sassen_scripts' );

function sassen_gallery_scripts() {

		// Slick Slider CSS 
		wp_enqueue_style('sassen-slick', get_stylesheet_directory_uri() . '/node_modules/slick-carousel/slick/slick.css', true);
		wp_enqueue_style('sassen-slicktheme', get_stylesheet_directory_uri() . '/node_modules/slick-carousel/slick/slick-theme.css', true);

		wp_enqueue_script('sassen-slickjs', get_stylesheet_directory_uri().'/node_modules/slick-carousel/slick/slick.min.js', array('jquery'), '1', true);

		wp_enqueue_script('sassen-slicksettings', get_stylesheet_directory_uri() . '/js/slicksettings.js', array('sassen-slickjs'), '1', false);
}

add_action( 'wp_enqueue_scripts', 'sassen_gallery_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}




