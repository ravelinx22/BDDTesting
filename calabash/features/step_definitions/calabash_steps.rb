require 'calabash-android/calabash_steps'

Then /^I press route list item number (\d+)$/ do |index|
	tap_when_element_exists("android.support.v7.widget.RecyclerView index:0 android.widget.TextView index:#{index.to_i-1}")
end
