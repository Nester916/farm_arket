<div class ="user-option">
    @if (Route::has('login'))
      @auth
      <a href="{{url('myorders')}}">
        My Orders
      </a>
      
      <a href="{{url('mycart')}}">
        <i class="fa fa-shopping-bag" aria-hidden='true'></i>
        [{{$count}}]
      </a>      
      <form style ="padding: 15px" method="Post" action="{{ route('logout') }}">
        @csrf
          <input class = "btn btn-success" type="submit" value="logout">
        </form>
      @else
        <a href="{{url('/login')}}">
            <i class='fa fa-user' aria-hidden='true'></i>
            <span>
                Login
            </span>
        </a>
        <a href="{{url('/register')}}">
            <i class='fa fa-vcard' aria-hidden='true'></i>
            <span>
                Register
            </span>
        </a>
        @endauth
    @endif
</div>