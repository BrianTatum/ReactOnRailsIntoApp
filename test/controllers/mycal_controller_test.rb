require 'test_helper'

class MycalControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mycal_index_url
    assert_response :success
  end

end
