<!DOCTYPE html>
<htmL>
    <head>
        @include("admin.css")
        <style type="text/css">
            table
            {
                border:2px solid skyblue;
                text-align:center;
            }
            th
            {
                background_color:skyblue;
                padding: 10px;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                color:white;
            }
            td 
            {
                color:white;
                padding:10px;
                border 1px solid skyblue;
            }
            .table-center
            {
                display: flex;
                justify-content: center;
                align-items:center;
            }
        </style>
</head>
<body>
    @include('admin.header')
@incude('admin.sidebar')
    <div class="page-content">
        <div class="page-header">
            <div class="container-fluid">
            <div class='table-center'>
                <table>
                    <tr>
                        <th> Customer name</th>
                        <th> Address</th>
                        <th> Phone</th>
                        <th> Product title</th>
                        <th> Price</th>
                        <th> Image</th>
                        <th> status</th>
                        <th> Change status</th>
                    </tr>
                    @foreach($data as $data)
                    <tr>
                        <td>{{$data->name}}</td>
                        <td>{{$data->rec_address}}</td>
                        <td>{{$data->phone}}</td>
                        <td>{{$data->product->title}}</td>
                        <td>{{$data->product->price}}</td>
                        <td>{{$data->product->image}}</td>
                        <td>
                            <img width='150'src="products/{{$data->product->image}}">
                        </td>
                        <td>
                            @if($data->status=="in progress")
                            <span style="color:red">{{$data->status}}</span>
                            @elseif($data->status=="On the way")
                            <span style="color:skyblue">{{$data->status}}</span>
                            @else
                            <span style="color:yellow">{{$data->status}}</span>
                            @endif
                        </td>
                        <td>
                            <a class="btn btn-primary" href="{{url('on_the_way',$data->id)}}">On the way</a>
                            <a class="btn btn-success" href="{{url('Delivered',$data->id)}}">Delivered</a>
                        </td>
                    </tr>
                    @endforeach
                </table>
            </div>
            </div>
        </div> 
    </div>
    @include('admin.js')
</body>
</html>