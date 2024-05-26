<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'latitude', 'longitude',
    ];


    public function sensorData()
    {
        return $this->hasMany(SensorData::class);
    }

    public function apiData()
    {
        return $this->hasMany(ApiData::class);
    }

    public function predictions()
    {
        return $this->hasMany(Prediction::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
