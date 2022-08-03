<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use JWTAuth;
use App\Models\User;
use App\Models\freelancer;
use App\Models\ContactDetail;
use App\Models\Organisation;
use App\Models\professional_Information;
use App\Models\contact_us;
use App\Models\Financial_Information;
use Validator;
use DB;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;



class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'registerOrganisation', 'registerFreelancer', 'contact_us', 'forgotpassword', 'resetPassword']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {

        $users = user::all();
        return response()->json([
            'status' => 'success',
            'data' => $users,
        ]);
    }

    // login

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    /**
     * Get Detail Profile
     * @OA\Post (
     *     path="/api/login",
     *     tags={"Autentication"},
     *     @OA\Parameter(
     *         in="query",
     *         name="email",
     *         required=true,
     *         @OA\Schema(type="string")
     * 
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="password",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
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

    public function login(Request $request)
    {
        $user = new User;
        // $user->user_id =Auth::User()->id;
        // Log::info('user sucessfully login : '.Auth::User());
        // dd(Auth::User());
        DB::beginTransaction();
        try {
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        if (!$token = auth('api')->attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->createNewToken($token);
    }

    // Login End

    // organisation start

    /**
     * Get Detail Profile
     * @OA\Post (
     *     path="/api/organisation/register",
     *     tags={"Autentication"},
     *     @OA\Parameter(
     *         in="query",
     *         name="name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="email",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="role_id",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="status",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *       @OA\Parameter(
     *         in="query",
     *         name="password",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *       @OA\Parameter(
     *         in="query",
     *         name="company_name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *        @OA\Parameter(
     *         in="query",
     *         name="company_size",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *             @OA\Parameter(
     *         in="query",
     *         name="industry_id",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *        @OA\Parameter(
     *         in="query",
     *         name="website_url",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="full_name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *           @OA\Parameter(
     *         in="query",
     *         name="mobile_number",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *               @OA\Parameter(
     *         in="query",
     *         name="phone_number",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *              @OA\Parameter(
     *         in="query",
     *         name="landline_number",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *          @OA\Parameter(
     *         in="query",
     *         name="designation",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *            @OA\Parameter(
     *         in="query",
     *         name="company_profile",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *       @OA\Parameter(
     *         in="query",
     *         name="country",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     * 
     *          @OA\Parameter(
     *         in="query",
     *         name="state",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="city",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *       
     *         @OA\Parameter(
     *         in="query",
     *         name="address",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *       
     *         @OA\Parameter(
     *         in="query",
     *         name="pincode",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
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

    public function registerOrganisation(Request $request)
    {
        DB::beginTransaction();
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|between:2,100',
                'email' => 'required|string|email|max:100|unique:users',
                'password' => 'required|string|min:6'
            ]);
            if ($validator->fails()) {
                return response()->json($validator->errors()->toJson(), 400);
            }
            $user = User::create(array_merge(

                $validator->validated(),
                ['password' => bcrypt($request->password)]

            ));

            $user->save();

            if ($user->save()) {
                $organisation = new Organisation;
                $organisation->user_id = $user->id;
                $organisation->company_name = $request->input('company_name');
                $organisation->company_size = $request->input('company_size');
                $organisation->industry_id = $request->input('industry_id');
                $organisation->website_url = $request->input('website_url');
                $organisation->company_profile = $request->input('company_profile');
                $organisation->save();
            }
            if ($organisation->save()) {
                $contact = new ContactDetail;
                $contact->user_id = $user->id;
                $contact->full_name = $request->input('full_name');
                $contact->designation = $request->input('designation');
                $contact->phone_number = $request->input('phone_number');
                $contact->landline_number = $request->input('landline_number');
                $contact->mobile_number = $request->input('mobile_number');
                $contact->address = $request->input('address');
                $contact->country = $request->input('country');
                $contact->state = $request->input('state');
                $contact->city = $request->input('city');
                $contact->pincode = $request->input('pincode');
                $contact->save();
            }
            DB::commit();
            return response()->json([
                'status' => '200 ok',
                'error' => 'false',
                'message' => 'User successfully registered',
                'data' => $user,
                'organisation' => $organisation,
                'contact' => $contact,


            ], 201);
        } catch (\Exception $e) {

            DB::rollBack();
            return response()->json([
                'status' => '200',
                'error' => true,
                'message' =>  $e
            ], 201);
        }
    }

    //organisation end//

    // freelancer start

    /**
     * Get Detail Profile
     * @OA\Post (
     *     path="/api/freelancer/register",
     *     tags={"Autentication"},
     *     @OA\Parameter(
     *         in="query",
     *         name="name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="email",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *       @OA\Parameter(
     *         in="query",
     *         name="password",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="total_experience",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="status",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *       @OA\Parameter(
     *         in="query",
     *         name="first_name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *            @OA\Parameter(
     *         in="query",
     *         name="last_name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *        @OA\Parameter(
     *         in="query",
     *         name="full_name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="gender",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *        @OA\Parameter(
     *         in="query",
     *         name="DOB",
     *         required=true,
     *         @OA\Schema(type="string" ),
     * 
     *     ),
     *        @OA\Parameter(
     *         in="query",
     *         name="country",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *        @OA\Parameter(
     *         in="query",
     *         name="city",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="state",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="pin_code",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *          @OA\Parameter(
     *         in="query",
     *         name="currency",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="phone_number",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="mobile_number",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *          @OA\Parameter(
     *         in="query",
     *         name="address",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="hourly_rate",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *         @OA\Parameter(
     *         in="query",
     *         name="daily_rate",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *           @OA\Parameter(
     *         in="query",
     *         name="monthly_rate",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *          @OA\Parameter(
     *         in="query",
     *         name="annually_rate",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *               @OA\Parameter(
     *         in="query",
     *         name="current_company",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *               @OA\Parameter(
     *         in="query",
     *         name="skills",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *               @OA\Parameter(
     *         in="query",
     *         name="full_time_available",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *                @OA\Parameter(
     *         in="query",
     *         name="part_time_available",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     * 
     *                 @OA\Parameter(
     *         in="query",
     *         name="profile_id",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
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

    public function registerFreelancer(Request $request)
    {
        DB::beginTransaction();
        try {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|between:2,100',
                'email' => 'required|string|email|max:100|unique:users',
                'password' => 'required|string|min:6',
                'full_name' => 'required|string',
                'gender' => 'required|string',
                'phone_number' => 'required|string',
                'country' => 'required|string',
                'state' => 'required|string',
                'city' => 'required|string',
                'address' => 'required|string',
                'pin_code' => 'required|string',
                'dob' => 'date'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors()->toJson(), 400);
            }
            $user = User::create(array_merge(

                $validator->validated(),
                ['password' => bcrypt($request->password)]

            ));


            $name =  $request->input("full_name");
            $name = explode(" ", $name);
            $fname = isset($name[0]) ? $name[0] : '';
            unset($name[0]);
            $lname = implode(' ', $name);

            $user->save();
            if ($user->save()) {
                $freelancer = new freelancer;
                $freelancer->user_id =  $user->id;
                $freelancer->first_name = $fname;
                $freelancer->last_name = $lname;
                $freelancer->full_name = $request->input('full_name');
                $freelancer->gender = $request->input('gender');
                $freelancer->dob = date("Y-m-d", strtotime($request->input('dob')));
                $freelancer->phone_number = $request->input('phone_number');
                $freelancer->mobile_number = $request->input('mobile_number');
                $freelancer->address = $request->input('address');
                $freelancer->country = $request->input('country');
                $freelancer->state = $request->input('state');
                $freelancer->city = $request->input('city');
                $freelancer->pincode = $request->input('pin_code');
                $freelancer->save();
            }
            if ($freelancer->save()) {
                $financial = new Financial_Information;
                $financial->user_id =  $user->id;
                $financial->currency = $request->input('currency');
                $financial->hourly_rate = $request->input('hourly_rate');
                $financial->daily_rate = $request->input('daily_rate');
                $financial->monthly_rate = $request->input('monthly_rate');
                $financial->annually_rate = $request->input('annually_rate');
                $financial->save();
            }
            if ($financial->save()) {
                $professional = new professional_Information;
                $professional->user_id =  $user->id;
                $professional->total_experience = $request->input('total_experience');
                $professional->current_company = $request->input('current_company');
                $professional->skills = $request->input('skills');
                $professional->full_time_available = $request->input('full_time_available');
                $professional->part_time_available = $request->input('part_time_available');
                $professional->available = $request->input('available');
                $professional->profile_id = $request->input('profile_id');
                $professional->save();
            }
            DB::commit();

            return response()->json([
                'status' => '200',
                'error' => false,
                'message' => 'User successfully registered',
                'data' => $user,
                'freelancer' => $freelancer,
                'financial' => $financial,
                'professional' => $professional,
            ], 201);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'status' => '200',
                'error' => true,
                'message' =>  $e
            ], 201);
        }
    }

    // freelancer End


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }
    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->createNewToken(auth()->refresh());
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function userProfile()
    {
        return response()->json(auth()->user());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function createNewToken($token)
    {
        return response()->json([

            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' =>  3600,
            'user' => auth()->user()
        ]);
    }

    // profile data
    /**
     * Get Detail Profile
     * @OA\Post (
     *     path="/api/userprofile",
     *     tags={"Autentication"},
     *       security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Parameter(
     *         in="query",
     *         name="type",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
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
    public function profile($id)
    {
        Log::info('Showing user profile for user: ' . $id);

        return view('user.profile', ['user' => User::findOrFail($id)]);

        //  return response()->json(auth()->user());
    }

    //  forgot Password 

    public function forgotpassword(Request $request)
    {
        // $request->validate(['email' => 'required|email']);

        $email = $request->only('email');
        $rules = ['email' => 'required:users,email'];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            // handler errors
            $erros = $validator->errors();
            // echo $erros;
            return $erros;
        } else {
            $user = User::where('email', '=', $email)->first();
            try {
                // verify the credentials and create a token for the user
                if (!$token = JWTAuth::fromUser($user)) {
                    return response()->json(['error' => 'invalid_credentials'], 401);
                }
            } catch (JWTException $e) {
                // something went wrong 
                return response()->json(['error' => 'could_not_create_token'], 500);
            }
            // if no errors are encountered we can return a JWT 
            //  return response()->json(compact('token')); 

            $status = Password::sendResetLink($email);

            return $status === Password::RESET_LINK_SENT
                ? response()->json(['status' => $status])
                : response()->json(['email' => $status]);
        }
    }
    public function resetPassword(Request $request)
    { {
            $this->validate($request, [
                'token' => 'required',
                'email' => 'required|email',
                'password' => 'required|confirmed',
            ]);

            $credentials = $request->only(
                'email',
                'password',
                'password_confirmation',
                'token'
            );

            $response = $this->passwords->reset($credentials, function ($user, $password) {
                $user->password = bcrypt($password);
                $user->save();

                $this->auth->login($user);
            });

            switch ($response) {
                case PasswordBroker::PASSWORD_RESET:
                    return redirect($this->redirectPath());

                default:
                    return redirect()->back()
                        ->withInput($request->only('email'))
                        ->withErrors(['email' => trans($response)]);
            }
        }
    }
    // forgot password End

    // conatct us 


    /**
     * Get Detail Profile
     * @OA\Post (
     *     path="/api/contact_us",
     *     tags={"Autentication"},
     *        security={
     *    {
     *     "passport": {}},
     *    },
     *     @OA\Parameter(
     *         in="query",
     *         name="name",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="email",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *       @OA\Parameter(
     *         in="query",
     *         name="subject",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *      @OA\Parameter(
     *         in="query",
     *         name="message",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
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
    public function contact()
    {
        $users = contact_us::all();
        return response()->json([
            'status' => 'success',
            'data' => $users,
        ]);
    }
    public function contact_us(Request $request)
    {
        DB::beginTransaction();
        try {
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
        }

        $validator = Validator::make($request->all(), [

            'name' => 'required|string|min:2',
            'email' => 'required|string|email|max:100|unique:users',
            'subject' => 'required|string|min:2',
            'message' => 'required|string|min:2',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }
        $user = contact_us::create(array_merge(
            $validator->validated(),

        ));
        return response()->json([
            'status' => '200 ok',
            'error' => 'false',
            'message' => 'contact us data stored',
            'data' => $user
        ], 201);
    }
    // contact us End

}
