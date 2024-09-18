<?php
use App\http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\HomeController;
use App\http\Controllers\AdminController; 




route::get("/",[HomeController::class,'home']);
route::get("/dashboard",[HomeController::class,'login_home'])->middleware(["auth","verified"])->name("dashboard");
route::get("product_search",[AdminController::class,'product_search'])->middleware(["auth","admin"]);

route::get('product_details/{id}',[HomeController::class,"product_details"]);

route::get('add_cart/{id}',[HomeController::class,"add_cart"])->middleware(["auth","verified"]);
route::get('mycart',[HomeController::class,"mycart"])->middleware(["auth","verified"]);
route::get('delete_cart/{id}',[HomeController::class,"delete_cart"])->middleware(["auth","verified"]);
route::post('confirm_order',[HomeController::class,"confirm_order"])->middleware(["auth","verified"]);
route::post('view_order',[AdminController::class,"view_orders"])->middleware(["auth","admin"]);
route::get("/myorders",[HomeController::class,'myorders'])->middleware(["auth","verified"]);