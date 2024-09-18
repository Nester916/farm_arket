<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HomeController;
use App\http\Controllers\AdminController; 

Route::get('/', function () {
    return view('home.index');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

route::get('admin/dashboard',[HomeController::class,'index']);
route::get("/",[HomeController::class,'home']);
route::get("/dashboard",[HomeController::class,'login_home'])->middleware(["auth","verified"])->name("dashboard");
route::get("product_search",[AdminController::class,'product_search'])->middleware(["auth","admin"]);

route::get('product_details/{id}',[HomeController::class,"product_details"]);

route::get('add_cart/{id}',[HomeController::class,"add_cart"])->middleware(["auth","verified"]);
route::get('mycart',[HomeController::class,"mycart"])->middleware(["auth","verified"]);
route::get('delete_cart/{id}',[HomeController::class,"delete_cart"])->middleware(["auth","verified"]);
route::post('confirm_order',[HomeController::class,"confirm_order"])->middleware(["auth","verified"]);
route::get('view_orders',[AdminController::class,"view_order"])->middleware(["auth","admin"]);