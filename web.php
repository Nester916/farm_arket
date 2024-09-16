<?php
use App\http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\HomeController;
use App\http\Controllers\AdminController; 




route::get("/",[HomeController::class,'home']);
route::get("/dashboard",[HomeController::class,'login_home'])->middleware(["auth","verified"])->name("dashboard");
route::get("product_search",[AdminController::class,'product_search'])->middleware(["auth","admin"]);

route::get('product_details/{id}',[HomeController::class,"product_details"]);