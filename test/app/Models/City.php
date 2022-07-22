<?php

namespace App\Models;
use App\Models\State;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;
    protected $table = 'cities';
    protected $fillable = ['city_id','city_name','state_id'];

    public function fetchstate(){
        return $this->hasOne(State::class,'state_id');
    }
    
}
