namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
class AdminController extends Controller
{
    public function product_search(Request $request)
    {
        $search = $request ->search;
        $product = Product::where("title","LIKE","%".$search."%")-> orWhere("category","LIKE","%".$search."%")-> paginate(3);
        return view('admin.view_product',compact("product"));
    }
    public function view_order()
    {
        $data = Order::all();
        return view("admin.order",compact('data'));
    }
}