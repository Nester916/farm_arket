<section class="shop_section layout padding">
    <div class=container>
        <div class="heading_container heading center">
            <h2>
                Latest product
            </h2>
        </div>
        <div class="row">
            @foreach($product as $products)
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class = "box">
                    <a href="">
                        <div class="img-box">
                            <img src="products/{{$products->image}}" alt=''>
                        </div>
                        <div class = "detail-box">
                            <h6>
                                {{$products->title}}
                            </h6>
                            <h6>
                                ${{products->price}}
                                <span>
                                    200$
                                </span>
                            </h6>
                        </div>
                    </a>
                </div>
            </div>  
            @endforeach
        </div> 
    </div> 
</section>
