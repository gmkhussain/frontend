<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
get_header(); ?>

	<div id="primary" class="content-area">
	<div class="container">
		<main id="main" class="site-main" role="main">

<section class="error-404 not-found">
				
				<div class="container">
				
					<div class="er404icon"><i class="fa fa-exclamation-triangle"></i></div>
				
					<h1 class="page-title">Oops! That page can’t be found.</h1>
				
					<p>It looks like nothing was found at this location. Maybe try a search?</p>
					
					<form role="search" method="get" class="search-form" action="http://ecommercehouse.com/projects/petodor-wp/">
						<label>
							<span class="screen-reader-text">Search for:</span>
							<input type="search" class="search-field" placeholder="Search …" value="" name="s" title="Search for:">
						</label>
						<button type="submit" class="search-submit"><span class="screen-reader-text">Search</span></button>
					</form>
				</div>
			</section>
		</main><!-- .site-main -->

		<?php //get_sidebar( 'content-bottom' ); ?>
    </div> 
	</div><!-- .content-area -->

<?php //get_sidebar(); ?>
<?php get_footer(); ?>
