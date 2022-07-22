<?php

namespace App\Http\Controllers\Organisation;
use DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\designations;
use App\Models\industry;
use App\Models\Services;
use App\Models\ServiceType;
class OrganisationController extends Controller
{    
    
    // designation

        /**
     * Get Detail Profile
     * @OA\Get (
     *     path="/api/designation",
     *     tags={"Organisation"},
     *       security={
 *    {
 *     "passport": {}},
 *    },
 
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="email", type="string", example="abc@gmail.com"),
     *             @OA\Property(property="password", type="string", example="abhishek"),
     *           
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */
    public function index()
    {
        $users = designations::all();
        return response()->json([
            'status' => 'success',
            'data' => $users,
        ]);
    }
    public function fetchdesignation($name)
    {
        // $countries= mpp_country::get(["name","id"]);
        return designations::where('name', 'LIKE', '%'. $name. '%')->get();
      
        
    }
    // designation


    // industry start

    /**
     * Get Detail Profile
     * @OA\Get (
     *     path="/api/industry",
     *     tags={"Organisation"},
     *        security={
 *    {
 *     "passport": {}},
 *    },
 
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="email", type="string", example="abc@gmail.com"),
     *             @OA\Property(property="password", type="string", example="abhishek"),
     *           
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */
    public function industry()
    {
        $users = industry::all();
        return response()->json([
            'status' => '200 ok',
            'data' => $users,
        ]);
    } 
// industry End


    /**
     * Get Detail Profile
     * @OA\Get (
     *     path="/api/serviceType",
     *     tags={"Organisation"},
     *        security={
 *    {
 *     "passport": {}},
 *    },
 
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="email", type="string", example="abc@gmail.com"),
     *             @OA\Property(property="password", type="string", example="abhishek"),
     *           
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */

// service type
    public function ServiceType()
    {
        $users = ServiceType::all();
        return response()->json([
            'status' => 'success',
            'data' => $users,
        ]);
    }



    /**
     * Get Detail Profile
     * @OA\Get (
     *     path="/api/services",
     *     tags={"Organisation"},
     *        security={
 *    {
 *     "passport": {}},
 *    },
 
     *     @OA\Response(
     *         response=200,
     *         description="success",
     *         @OA\JsonContent(
     *              @OA\Property(property="id", type="number", example=1),
     *              @OA\Property(property="email", type="string", example="abc@gmail.com"),
     *             @OA\Property(property="password", type="string", example="abhishek"),
     *           
     *              @OA\Property(property="updated_at", type="string", example="2021-12-11T09:25:53.000000Z"),
     *              @OA\Property(property="created_at", type="string", example="2021-12-11T09:25:53.000000Z")
     *         )
     *     )
     * )
     */
    public function Services()
    {
        $users = Services::all();
        return response()->json([
            'status' => 'success',
            'data' => $users,
        ]);
    }
    // services type
}
