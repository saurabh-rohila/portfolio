"""
Backend API Tests for Gooey Mooey Bakery
Tests: Enquiry endpoints (POST /api/enquiry, GET /api/enquiries)
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthCheck:
    """Basic API health check"""
    
    def test_api_root_returns_hello_world(self):
        """Test that API root endpoint is accessible"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Hello World"


class TestEnquiryCreate:
    """POST /api/enquiry endpoint tests"""
    
    def test_create_enquiry_with_all_fields(self):
        """Test creating enquiry with all fields populated"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "name": f"TEST_User_{unique_id}",
            "phone": "9876543210",
            "occasion": "Birthday",
            "event_date": "2026-02-15",
            "servings": "10-15",
            "flavour": "Chocolate Truffle",
            "design": "Floral Theme",
            "delivery_area": "Gurugram Sector 45",
            "message": "Please add extra chocolate"
        }
        
        response = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        
        # Status assertion
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        # Data assertions
        data = response.json()
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        assert data["occasion"] == payload["occasion"]
        assert data["event_date"] == payload["event_date"]
        assert data["servings"] == payload["servings"]
        assert data["flavour"] == payload["flavour"]
        assert data["design"] == payload["design"]
        assert data["delivery_area"] == payload["delivery_area"]
        assert data["message"] == payload["message"]
        assert "id" in data
        assert data["status"] == "new"
        assert "created_at" in data
    
    def test_create_enquiry_with_required_fields_only(self):
        """Test creating enquiry with only name and phone (required fields)"""
        unique_id = str(uuid.uuid4())[:8]
        payload = {
            "name": f"TEST_MinimalUser_{unique_id}",
            "phone": "9123456789"
        }
        
        response = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}: {response.text}"
        
        data = response.json()
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        # Optional fields should be empty strings
        assert data["occasion"] == ""
        assert data["event_date"] == ""
        assert data["servings"] == ""
        assert data["flavour"] == ""
        assert data["design"] == ""
        assert data["delivery_area"] == ""
        assert data["message"] == ""
    
    def test_create_enquiry_missing_name_returns_422(self):
        """Test that missing name field returns validation error"""
        payload = {
            "phone": "9876543210"
        }
        
        response = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        
        assert response.status_code == 422, f"Expected 422, got {response.status_code}"
    
    def test_create_enquiry_missing_phone_returns_422(self):
        """Test that missing phone field returns validation error"""
        payload = {
            "name": "Test User"
        }
        
        response = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        
        assert response.status_code == 422, f"Expected 422, got {response.status_code}"
    
    def test_create_enquiry_empty_body_returns_422(self):
        """Test that empty request body returns validation error"""
        response = requests.post(f"{BASE_URL}/api/enquiry", json={})
        
        assert response.status_code == 422, f"Expected 422, got {response.status_code}"


class TestEnquiriesList:
    """GET /api/enquiries endpoint tests"""
    
    def test_get_enquiries_returns_list(self):
        """Test that GET /api/enquiries returns a list"""
        response = requests.get(f"{BASE_URL}/api/enquiries")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert isinstance(data, list), "Response should be a list"
    
    def test_create_and_verify_enquiry_in_list(self):
        """Test that created enquiry appears in the list (Create → GET verification)"""
        unique_id = str(uuid.uuid4())[:8]
        unique_name = f"TEST_VerifyUser_{unique_id}"
        
        # Create enquiry
        payload = {
            "name": unique_name,
            "phone": "9999888877",
            "occasion": "Anniversary"
        }
        
        create_response = requests.post(f"{BASE_URL}/api/enquiry", json=payload)
        assert create_response.status_code == 200
        created_enquiry = create_response.json()
        created_id = created_enquiry["id"]
        
        # Verify in list
        list_response = requests.get(f"{BASE_URL}/api/enquiries")
        assert list_response.status_code == 200
        
        enquiries = list_response.json()
        
        # Find our created enquiry
        found = False
        for enquiry in enquiries:
            if enquiry.get("id") == created_id:
                found = True
                assert enquiry["name"] == unique_name
                assert enquiry["phone"] == "9999888877"
                assert enquiry["occasion"] == "Anniversary"
                break
        
        assert found, f"Created enquiry with id {created_id} not found in list"


class TestStatusEndpoints:
    """Test status check endpoints"""
    
    def test_create_status_check(self):
        """Test POST /api/status endpoint"""
        payload = {
            "client_name": "TEST_Client"
        }
        
        response = requests.post(f"{BASE_URL}/api/status", json=payload)
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert data["client_name"] == "TEST_Client"
        assert "id" in data
        assert "timestamp" in data
    
    def test_get_status_checks(self):
        """Test GET /api/status endpoint"""
        response = requests.get(f"{BASE_URL}/api/status")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert isinstance(data, list)


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
