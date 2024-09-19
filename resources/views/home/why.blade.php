<!DOCTYPE html>
<html>

<head>

  @include('home.css')
      
</head>

<body>
  <div class="hero_area">
    <!-- header section strats -->
    @include('home.header') 
    <!-- end header section -->
 


    <section id="faq" class="faq-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="section-title text-center mb-60">
                <h2 class="title">FAQ</h2>
                <p>Find answers to the most commonly asked questions about Far_market.</p>
              </div>
            </div>
          </div>
      
          <div class="row">
            <div class="col-lg-6">
              <div class="faq-wrapper">
                <div class="faq-item mb-30">
                  <div class="faq-title">
                    <h5>How do I place an order on Far_market?</h5>
                  </div>
                  <div class="faq-content">
                    <p>To place an order, browse the products, add your desired items to the cart, and proceed to checkout. You’ll need to provide delivery details and payment information. Once your order is confirmed, you’ll receive a notification.</p>
                  </div>
                </div>
      
                <div class="faq-item mb-30">
                  <div class="faq-title">
                    <h5>What payment methods are accepted?</h5>
                  </div>
                  <div class="faq-content">
                    <p>We accept Cash on Delivery and Stripe for online payments.</p>
                  </div>
                </div>
      
                <div class="faq-item mb-30">
                  <div class="faq-title">
                    <h5>Can I cancel or modify my order?</h5>
                  </div>
                  <div class="faq-content">
                    <p>Yes, you can cancel or modify your order before it is dispatched for delivery. Please contact customer support as soon as possible for assistance.</p>
                  </div>
                </div>
              </div>
            </div>
      
            <div class="col-lg-6">
              <div class="faq-wrapper">
                <div class="faq-item mb-30">
                  <div class="faq-title">
                    <h5>How do deliveries work?</h5>
                  </div>
                  <div class="faq-content">
                    <p>Deliveries are typically completed within 2-5 business days. We partner with local delivery services to ensure your products arrive fresh and on time. You'll receive a tracking number once your order is on the way.</p>
                  </div>
                </div>
      
                <div class="faq-item mb-30">
                  <div class="faq-title">
                    <h5>What is your return policy?</h5>
                  </div>
                  <div class="faq-content">
                    <p>We offer a hassle-free return policy within 7 days for most items. Please ensure the product is in its original condition and packaging. Perishable items like meat and vegetables may have specific return conditions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

 

   

  <!-- info section -->
@include('home.footer')

</body>

</html>