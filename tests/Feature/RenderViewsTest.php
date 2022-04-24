<?php

namespace Tests\Feature;

use App\Models\User;
use Tests\TestCase;

class RenderViewsTest extends TestCase
{

    public function test_render_login_page()
    {
        $response = $this->get('/login');

        $response->assertStatus(200);
    }

    public function test_render_register_page()
    {
        $response = $this->get('/register');

        $response->assertStatus(200);
    }

    public function test_render_dashboard_page_as_authenticated_user()
    {
        $user = User::factory(1)->create()->first();

        $this->actingAs($user);

        $response = $this->get('/dashboard');

        $response->assertStatus(200);
    }

    public function test_render_dashboard_page_as_unauthenticated_user()
    {
        $response = $this->get('/dashboard');

        $response->assertStatus(302);
    }

    public function test_render_incidents_monitor_page_as_authenticated_user()
    {
        $user = User::factory(1)->create()->first();

        $this->actingAs($user);

        $response = $this->get('/incident-manager');

        $response->assertStatus(200);
    }

    public function test_render_incidents_monitor_page_as_unauthenticated_user()
    {
        $response = $this->get('/incident-manager');

        $response->assertStatus(302);
    }

    public function test_render_traffic_monitor_page_as_authenticated_user()
    {
        $user = User::factory(1)->create()->first();

        $this->actingAs($user);

        $response = $this->get('/road-trip-manager');

        $response->assertStatus(200);
    }

    public function test_render_traffic_monitor_page_as_unauthenticated_user()
    {
        $response = $this->get('/road-trip-manager');

        $response->assertStatus(302);
    }
}
