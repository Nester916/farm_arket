public function product_search(Request $request)
{
    $search = $request ->search;

    $product = Product::where("title","LIKE","%".$search."%")-> orWhere("category","LIKE","%".$search."%")-> paginate(3);

    return view('admin.view_product',compact("product"));
}