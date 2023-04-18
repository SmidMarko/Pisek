@extends('layouts.admin')

@section('content')
    <p>
        <a href="{{ route('admin.clients.create') }}" class="btn btn-default">Add</a>
    </p>

    <table class="table table-bordered table-condensed">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            @foreach($clients as $client)
                <tr>
                    <td>{{ $client->id }}</td>
                    <td>{{ $client->name }}</td>
                    <td>{{ $client->revoked ? 'Revoked' : 'Active'}}</td>
                    <td>
                        <a href="{{ route('admin.clients.edit', $client->id) }}" class="btn btn-xs btn-primary">Edit</a>
                        <form action="{{ route('admin.clients.destroy', $client->id) }}" method="POST" style="display: inline" role="delete">
                            {{ csrf_field() }}
                            <input name="_method" type="hidden" value="DELETE"/>
                            <button type="submit" class="btn btn-xs btn-danger" role="delete">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection