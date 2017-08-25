class MycalController < ApplicationController
  def index
  	@mycal_props = {
  		events: [
	      {start: '2017-8-24'.to_date,	end: '2017-8-27'.to_date,	title: 'Test Event Red',	eventColor: 'red'},
	      {start: '2017-8-2'.to_date,	end: '2017-8-3'.to_date,	title: 'Test Event Blue',	eventColor: 'blue'},
	      {start: '2017-8-15'.to_date,	end: '2017-8-17'.to_date,	title: 'Test Event Green',	eventColor: 'green'}
	    ]
  	}
  end
end
