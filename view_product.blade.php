input[type='search']
{
    width: 500px;
    height: 60px;
    margin-left: 50px;
}



<form action='{{url("product_search")}}' method='get'>
    <input type ="search" name="search">
    <input type ="submit" class = "btn btn-secondary" value="search">
</form>