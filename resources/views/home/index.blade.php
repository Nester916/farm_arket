<!DOCTYPE html>
<html>

<head>
    @include('home.css')
</head>

<body>
  <div class="hero_area">
    <!-- header section starts -->

    <!-- end header section -->
    @include('home.header')
    <!-- slider section -->
    @include('home.slider')
    <!-- end slider section -->
  </div>
  <!-- end hero area -->

  <!-- shop section -->
  @include('home.product')
  <!-- end shop section -->

  <!-- contact section -->
  @include('home.contact')
  <!-- end contact section -->

   

  <!-- info section -->
   @include('home.footer')



</body>

</html>
