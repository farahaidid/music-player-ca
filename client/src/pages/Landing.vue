<template>
  <div class="header-collapse">
		
		<div id="site-content">
			<header class="site-header">
				<div class="container">
					<a href="index.html" id="branding">
						<!-- <img src="../assets/landing/dummy/logo.png" alt="Site Title"> -->
						<!-- <small class="site-description">Slogan goes here</small> -->
            <h1 class="m-0 title text-danger">MUSIC</h1>
					</a> <!-- #branding -->
					
					<nav class="main-navigation">
						<button type="button" class="toggle-menu"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							<li class="menu-item" v-if="LOGGED_IN"><a href="/dashboard">Dashboard</a></li>
							<li class="menu-item" v-else><a href="/login">Get Started</a></li>
							<!-- <li class="menu-item"><a href="about.html">About</a></li>
							<li class="menu-item"><a href="gallery.html">Gallery</a></li>
							<li class="menu-item"><a href="download.html">Download</a></li>
							<li class="menu-item"><a href="blog.html">Blog</a></li>
							<li class="menu-item"><a href="contact.html">Contact</a></li> -->
						</ul> <!-- .menu -->
					</nav> <!-- .main-navigation -->
					<div class="mobile-menu"></div>
				</div>
			</header> <!-- .site-header -->
			
			<div class="hero">
				<div class="slider">
					<ul class="slides">
						<li class="lazy-bg" data-background="../assets/landing/dummy/slide-1.jpg">
							<div class="container">
								<h2 class="slide-title">Listen Music, Refresh Mind</h2>
								<h3 class="slide-subtitle">Save your favourite musics to your playlist</h3>
								<p class="slide-desc">Here you can upload your music files to your playlist and play any one of them and enjoy!</p>

								<a href="#" class="button cut-corner">Read More</a>
							</div>
						</li>
						<li class="lazy-bg" data-background="../assets/landing/dummy/slide-2.jpg">
							<div class="container">
									<h2 class="slide-title">Listen Music, Refresh Mind</h2>
									<h3 class="slide-subtitle">Save your favourite musics to your playlist</h3>
									<p class="slide-desc">Here you can upload your music files to your playlist and play any one of them and enjoy!</p>

									<a href="#" class="button cut-corner">Read More</a>
							</div>
						</li>
						<li class="lazy-bg" data-background="../assets/landing/dummy/slide-3.jpg">
							<div class="container">
									<h2 class="slide-title">Listen Music, Refresh Mind</h2>
									<h3 class="slide-subtitle">Save your favourite musics to your playlist</h3>
									<p class="slide-desc">Here you can upload your music files to your playlist and play any one of them and enjoy!</p>

									<a href="#" class="button cut-corner">Read More</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
			
			<main class="main-content">
				<div class="fullwidth-block testimonial-section">
					<div class="container">
						<div class="quote-slider">
							<ul class="slides">
								<li>
									<blockquote>
										<p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"</p>
										<cite>John Smith</cite>
										<span>Corporation CEO, books author</span>
									</blockquote>
								</li>
								<li>
									<blockquote>
										<p>"Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"</p>
										<cite>John Smith</cite>
										<span>Corporation CEO, books author</span>
									</blockquote>
								</li>
							</ul>
						</div>
					</div>
				</div> <!-- .testimonial-section -->

				<div class="fullwidth-block upcoming-event-section" data-bg-color="#191919">
					<div class="container">
						<header class="section-header">
							<h2 class="section-title">Upcoming events</h2>

							<div class="event-nav">
								<a class="prev" id="event-prev" href="#"><i class="fa fa-caret-left"></i></a>
	    						<a class="next" id="event-next" href="#"><i class="fa fa-caret-right"></i></a>
							</div> <!-- .event-nav -->

						</header> <!-- .section-header -->
						<div class="event-carousel">
							
							<div class="event">
								<div class="entry-date">
									<div class="date">23</div>
									<span class="month">Jun</span>
								</div>
								<h2 class="entry-title"><a href="#">Sed et persipiatis unde omnis iste natus</a></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
							</div> <!-- .event -->
							
							
							<div class="event">
								<div class="entry-date">
									<div class="date">23</div>
									<span class="month">Jun</span>
								</div>
								<h2 class="entry-title"><a href="#">Sed et persipiatis unde omnis iste natus</a></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
							</div> <!-- .event -->
							
							
							<div class="event">
								<div class="entry-date">
									<div class="date">23</div>
									<span class="month">Jun</span>
								</div>
								<h2 class="entry-title"><a href="#">Sed et persipiatis unde omnis iste natus</a></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur</p>
							</div> <!-- .event -->
							
							
							<div class="event">
								<div class="entry-date">
									<div class="date">23</div>
									<span class="month">Jun</span>
								</div>
								<h2 class="entry-title"><a href="#">Sed et persipiatis unde omnis iste natus</a></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur </p>
							</div> <!-- .event -->
							
							
							<div class="event">
								<div class="entry-date">
									<div class="date">23</div>
									<span class="month">Jun</span>
								</div>
								<h2 class="entry-title"><a href="#">Sed et persipiatis unde omnis iste natus</a></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur </p>
							</div> <!-- .event -->
							
						</div> <!-- .event-carousel -->
					</div> <!-- .container -->
				</div> <!-- .upcoming-event-section -->

				<div class="fullwidth-block why-chooseus-section">
					<div class="container">
						<h2 class="section-title">Why choose us?</h2>

						<div class="row">
							<div class="col-md-4">
								<div class="feature">
									<figure class="cut-corner">
										<img src="../assets/landing/dummy/medium-image-1.jpg" alt="">
									</figure>
									<h3 class="feature-title">Similique sunt in culpa qui officia deserunt mollitia animi laborum dolorum</h3>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
								</div> <!-- .feature -->
							</div>
							<div class="col-md-4">
								<div class="feature">
									<figure class="cut-corner">
										<img src="../assets/landing/dummy/medium-image-2.jpg" alt="">
									</figure>
									<h3 class="feature-title">Similique sunt in culpa qui officia deserunt mollitia animi laborum dolorum</h3>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
								</div> <!-- .feature -->
							</div>
							<div class="col-md-4">
								<div class="feature">
									<figure class="cut-corner">
										<img src="../assets/landing/dummy/medium-image-3.jpg" alt="">
									</figure>
									<h3 class="feature-title">Similique sunt in culpa qui officia deserunt mollitia animi laborum dolorum</h3>
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
								</div> <!-- .feature -->
							</div>
						</div>
					</div> <!-- .container -->
				</div> <!-- .why-chooseus-section -->
			</main> <!-- .main-content -->

			<footer class="site-footer">
				<div class="container">
					<img src="../assets/landing/dummy/logo-footer.png" alt="Site Name">
					
					<address>
						<p>495 Brainard St. Detroit, MI 48201 <br><a href="tel:354543543">(563) 429 234 890</a> <br> <a href="mailto:info@bandname.com">info@bandname.com</a></p> 
					</address> 
					
					<form action="#" class="newsletter-form">
						<input type="email" placeholder="Enter your email to join newsletter...">
						<input type="submit" class="button cut-corner" value="Subscribe">
					</form> <!-- .newsletter-form -->
					
					<div class="social-links">
						<a href="#"><i class="fa fa-facebook-square"></i></a>
						<a href="#"><i class="fa fa-twitter"></i></a>
						<a href="#"><i class="fa fa-google-plus"></i></a>
						<a href="#"><i class="fa fa-pinterest"></i></a>
					</div> <!-- .social-links -->
					
					<p class="copy">Copyright 2014 Company Name. Designed by Themezy. All right reserved</p>
				</div>
			</footer> <!-- .site-footer -->

		</div> <!-- #site-content -->

		
	</div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  mounted(){
    $(".slider").flexslider({
			directionNav: false,
			controlNav: true,
		});
  },
  computed:{
    ...mapGetters("AUTH",["LOGGED_IN"]),
  }
}
</script>

<style scoped>
@import "../assets/landing/style.css";
</style>