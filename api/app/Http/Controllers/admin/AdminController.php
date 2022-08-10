<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\RaiseTicket;
use App\Models\UserSkillDetails;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use PDF;

class AdminController extends Controller
{
    public function indexadmin()
{
$data['admin'] = UserSkillDetails::orderBy('id','desc')->paginate(5);
return view('admin.index', $data);
}

public function editTicket(RaiseTicket $user,$id)
{
return view('admin.editTicket')->with('user',RaiseTicket::find($id));
}

public function updateTicket(Request $request, RaiseTicket $user)
{

$res = RaiseTicket::find($request->id);
$res->skill_id = $request->input('skill_id');

$res->save();
$request->session()->flash('msg','submit');
return redirect()->route('home')
->with('success','edit Has Been updated successfully');
}



    public function edit(UserSkillDetails $edit,$id)
{
return view('admin.edit')->with('edit',UserSkillDetails::find($id));
}
/**
* Update the specified resource in storage.
*
* @param  \Illuminate\Http\Request  $request
* @param  \App\UserSkillDetails  $company
* @return \Illuminate\Http\Response
*/
public function update(Request $request, UserSkillDetails $users)
{

$res = UserSkillDetails::find($request->id);
$res->skill_id = $request->input('skill_id');

$res->save();
$request->session()->flash('msg','submit');
return redirect()->route('home')
->with('success','edit Has Been updated successfully');
}
    
    
    public function index(Request $request)
    {
        $search=$request['search'] ?? "";
        if ($search != "")
        $users=User::where('name','Like',"%$search%")->get();
        else{
           $users=User::all();
        }

      
        $users=compact('users','search');
        return view('admin.list')->with($users);
    }
    public function userskills()
    {
         $user= UserSkillDetails::select('id', 'user_id', 'skill_id')->get();

        return view('admin.userskills')->with('user', $user);
    }
    public function ticket()
    {
         $user = RaiseTicket::select('id', 'user_id', 'skill_id','budget','availability')->get();

        return view('admin.ticket')->with('user', $user);
    }

    public function userdelete(Request $request ,$id)
    {
            $edit = UserSkillDetails::findOrFail($id);
            $edit->id =$request->id;
            $edit->delete();
            return redirect('/userskills')->with('success', 'Game Data is successfully deleted');
    }
public function ticketdelete(Request $request ,$id)
{
        $edit = RaiseTicket::findOrFail($id);
        $edit->id =$request->id;
        $edit->delete();
        return redirect('/ticket')->with('success', 'Game Data is successfully deleted');
}
  

public function generate_pdf(){
    $users=User::all();
    $pdf = PDF::loadView('pdf',[
      'users'=>$users
    ]);
	return $pdf->stream('document.pdf');
}

}
