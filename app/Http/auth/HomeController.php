<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;


class HomeController extends HomeController
{
    public function index()
    {
        return view("admin.index");
    }

    public function home()
    {
        $product = Product::all()

        return view('home.index',compact("product"));
    }

    public function login_home()
    {
        $product = Product::all()

        return view('home.index',compact("product"));   
    }
}