<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class prediction extends Model
{
    use HasFactory;
    protected $fillable = [
        'location_id', 'event_type', 'predicted_at', 'sensor_data_id', 'api_data_id', 'severity', 'description'
    ];

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function sensorData()
    {
        return $this->belongsTo(SensorData::class);
    }

    public function apiData()
    {
        return $this->belongsTo(ApiData::class);
    }
}
