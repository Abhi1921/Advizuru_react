<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;
    protected $fillable = [
        'company_name',
        'start_date',
        'end_date',
        'description',  
        'designation_id'
    ];
    protected $casts = [
      
        'designation_id' => 'integer',
        'user_id' => 'integer',
    ];

}
