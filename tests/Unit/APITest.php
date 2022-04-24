<?php

namespace Tests\Unit;

use App\Models\IncidentType;
use App\Models\User;
use App\Models\Incident;
use Tests\TestCase;

class APITest extends TestCase
{
    public function test_create_user()
    {
        User::factory(1)->create();
        self::assertTrue(true);
    }

    public function test_geojson_api()
    {
        $user = User::first();

        $this->actingAs($user);

        $response = $this->get('api/geojson');
        $response->assertSuccessful();
    }

    public function test_get_road_trips_api_as_authenticated()
    {
        $user = User::first();
        $this->actingAs($user);

        $response = $this->get('api/road_trips');
        $response->assertStatus(200);
    }

    public function test_get_road_trips_api_as_unauthenticated()
    {
        $response = $this->get('api/road_trips');
        $response->assertStatus(302);
    }

    public function test_get_incidents_api_as_authenticated()
    {
        $user = User::first();
        $this->actingAs($user);

        $response = $this->get('api/incidents');
        $response->assertStatus(200);
    }

    public function test_get_incidents_api_as_unauthenticated()
    {
        $response = $this->get('api/incidents');
        $response->assertStatus(302);
    }

    public function test_post_incident_type_api_as_authenticated()
    {
        $user = User::first();
        $this->actingAs($user);

        $response = $this->post('api/incident_types', [
            'name' => 'Road Block',
            'image' => 'public/images/road-block.jpg',
            'marker' => 'public/images/markers/road-block-marker.jpg'
        ]);

        $response->assertStatus(200);
    }

    public function test_post_incident_type_api_as_unauthenticated()
    {

        $response = $this->post('api/incident_types', [
            'name' => 'Road Block',
            'image' => 'public/images/road-block.jpg',
            'marker' => 'public/images/markers/road-block-marker.jpg'
        ]);

        $response->assertStatus(302);
    }

    public function test_post_incident_api_as_authenticated()
    {
        $user = User::first();
        $this->actingAs($user);

        $incidentType = IncidentType::create([
            'name' => 'Road Block',
            'image' => 'public/images/road-block.jpg',
            'marker' => 'public/images/markers/road-block-marker.jpg'
        ]);

        $response = $this->post('api/incidents', [
            "incident_type_id" => $incidentType->id,
            "user_id" => $user->id,
            "name" => "Road Block",
            "description" => "Only one wheelers can pass!",
            "latitude" => "0",
            "longitude" => "0",
            "device_identifier" => "test",
            "severity" => 3
        ]);
        $response->assertStatus(200);
    }

    public function test_post_incident_api_as_unauthenticated()
    {
        $incidentType = IncidentType::create([
            'name' => 'Road Block',
            'image' => 'public/images/road-block.jpg',
            'marker' => 'public/images/markers/road-block-marker.jpg'
        ]);

        $response = $this->post('api/incidents', [
            "incident_type_id" => $incidentType->id,
            "user_id" => 1,
            "name" => "Road Block",
            "description" => "Only one wheelers can pass!",
            "latitude" => "0",
            "longitude" => "0",
            "device_identifier" => "test",
            "severity" => 3
        ]);
        $response->assertStatus(302);
    }

    public function test_post_false_report_api_as_authenticated()
    {
        $user = User::first();
        $this->actingAs($user);

        $incidentType = IncidentType::create([
            'name' => 'Road Block',
            'image' => 'public/images/road-block.jpg',
            'marker' => 'public/images/markers/road-block-marker.jpg'
        ]);

        $incident = Incident::create([
            "incident_type_id" => $incidentType->id,
            "user_id" => $user->id,
            "name" => "Road Block",
            "description" => "Only one wheelers can pass!",
            "latitude" => "0",
            "longitude" => "0",
            "device_identifier" => "test",
            "severity" => 3
        ]);

        $response = $this->post('api/false_reports', [
            "details" => "test details",
            "incident_id" => $incident->id,
            "user_id" => $user->id
        ]);


        $response->assertStatus(200);
    }

    public function test_post_false_report_api_as_unauthenticated()
    {
        $user = User::first();
        $incidentType = IncidentType::create([
            'name' => 'Road Block',
            'image' => 'public/images/road-block.jpg',
            'marker' => 'public/images/markers/road-block-marker.jpg'
        ]);

        $incident = Incident::create([
            "incident_type_id" => $incidentType->id,
            "user_id" => $user->id,
            "name" => "Road Block",
            "description" => "Only one wheelers can pass!",
            "latitude" => "0",
            "longitude" => "0",
            "device_identifier" => "test",
            "severity" => 3
        ]);

        $response = $this->post('api/false_reports', [
            "details" => "test details",
            "incident_id" => $incident->id,
            "user_id" => $user->id
        ]);


        $response->assertStatus(302);
    }
}
