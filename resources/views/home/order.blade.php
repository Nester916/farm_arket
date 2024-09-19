<!DOCTYPE html>
<html>
  <head> 
   @include('admin.css')

   <style type="text/css">
     
     table
     {
      border: 2px solid skyblue;
      text-align: center;

     }

     th
     {

      background-color: skyblue;
      padding: 10px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
       color: white;
     }
     td
     {
      color: white;
      padding: 10px;
      border: 1px solid skyblue;
     }
     .table_center
     {
      display: flex;
      justify-content: center;
      align-items: center;
     }
   </style>
  </head>
  <body>
    @include('admin.header')
    
   @include('admin.sidebar')
      <!-- Sidebar Navigation end-->
      <div class="page-content">
        <div class="page-header">
          <div class="container-fluid">
              <h3>All Orders</h3>

              <br>
              <br>
       <div class="table_center">

           <table>
             <tr>
               <th>Product Name</th>
               <th>Price</th>
               <th>Delivery Status</th>
               <th>Image</th>
             </tr>
              @foreach($order as $order)
             <tr>
               <td>{{$order->product->title}}</td>
               <td>{{$order->product->price}}</td>
               <td>{{$order->status}}</td>

               <td>
                <img width="150" src="products/{{$order->product->image}}">
               </td>
               
             </tr>
             @endforeach
           </table>
         </div>
          </div> 
      </div>
    </div>
    <!-- JavaScript files-->
   @include('admin.js')
  </body>
</html>