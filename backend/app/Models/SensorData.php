<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SensorData extends Model
{
    use HasFactory;
    protected $fillable = [
        'location_id', 'sensor_type', 'timestamp', 'value'
    ];


    public function location()
    {
        return $this->belongsTo(Location::class);
    }
}
