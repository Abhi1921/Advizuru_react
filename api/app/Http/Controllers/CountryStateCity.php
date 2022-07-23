<?php

namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
use Validator;
use Response;
use Redirect;
use App\Models\Country;
use App\Models\State;
use App\Models\City;
use App\Models\currency;

class CountryStateCity extends Controller
{

    /**
     * Get Detail Profile
     * @OA\Get (
     *     path="/api/country",
     *     tags={"Country State City"},
     *     
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="type", type="string", example="bearer token"),
     *             @OA\Property(property="token", type="string", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0ODM1NjE1LCJleHAiOjE2NTQ4MzkyMTUsIm5iZiI6MTY1NDgzNTYxNSwianRpIjoiWGJPZWh1WWpkRnc1N3h2ZiIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.pzMcbgOqwFWDKctrVompH8aTmdRidpZoeqcKYvh5hxo"),
     *           
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */

    public function index()
    {
        // $countries= mpp_country::get(["name","id"]);
        $users = Country::all();
        return response()->json([
            'status' => 'success',
            'Country' => $users,
        ]);      
        
    }
   // profile data
    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/state",
     *     tags={"Country State City"},
     *     @OA\Parameter(
     *         in="query",
     *         name="country_id",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="type", type="string", example="bearer token"),
     *             @OA\Property(property="token", type="string", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0ODM1NjE1LCJleHAiOjE2NTQ4MzkyMTUsIm5iZiI6MTY1NDgzNTYxNSwianRpIjoiWGJPZWh1WWpkRnc1N3h2ZiIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.pzMcbgOqwFWDKctrVompH8aTmdRidpZoeqcKYvh5hxo"),
     *           
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */
    public function getState(Request $request)
    {
        $users = State::where("country_id",$request->country_id)
                    ->get(["state_id","state_name"]);;
        return response()->json([
            'status' => 'success',
            'State' => $users,
        ]);
        // $data = 
                  
        // return response()->json($data);
    }
      // profile data
    /**
     * Get Detail Profile
     * @OA\post (
     *     path="/api/city",
     *     tags={"Country State City"},
     *     @OA\Parameter(
     *         in="query",
     *         name="state_id",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="type", type="string", example="bearer token"),
     *             @OA\Property(property="token", type="string", example="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0ODM1NjE1LCJleHAiOjE2NTQ4MzkyMTUsIm5iZiI6MTY1NDgzNTYxNSwianRpIjoiWGJPZWh1WWpkRnc1N3h2ZiIsInN1YiI6IjUiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.pzMcbgOqwFWDKctrVompH8aTmdRidpZoeqcKYvh5hxo"),
     *           
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */
    public function getCity(Request $request)
    {
         $users = City::where("state_id",$request->state_id)
        ->get(["city_id","city_name"]);;

        return response()->json([

            'status' => 'success',

            'city' => $users,
]);
    }
 
    public function getCurrency(Request $request)
    {
        $users = currency::where("id",$request->id)
        ->get(["name"]);;

        return response()->json([

            'status' => 'success',

            'Currency' => $users,
]);
    }

    public function getallcity($city_name)
    {
        // $countries= mpp_country::get(["name","id"]);
        return City::where('city_name', 'LIKE', '%'. $city_name. '%')->select("city_id as id" , "city_name as name", "state_id")->get();
      
        
    }

}