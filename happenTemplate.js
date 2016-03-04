var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            var timeStamp = Date.now() / 1000 | 0;
            return String(timeStamp);
        },
		UnixMillisecond: function(){
            var timeStamps = Date.now();
            return String(timeStamps);
        }
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
                  var date = new Date();
                  var time = date.toLocaleTimeString();
                  return String(time);
              },
	   	    WithOutSeconds: function() {
                return new Date().toLocaleTimeString().replace(/:\d\d /, ' ');
                 
               }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
                var date = new Date();
                var numb = date.toLocaleDateString();
                return String(numb);
            },
			Name: function(){
                var date = new Date();
                var month = date.getMonth();
                var day = date.getDate();
                var year = date.getFullYear();
                var name = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];
                return String(name[month] + ' ' + day + ',' + ' ' + year);
            }
                
            
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
                var date = new Date();
                var secs = date.getSeconds();
                return String(secs);
            },
			DblDigit: function(){
                var date = new Date();
                var secs = date.getSeconds();
                if(secs < 10) {
                    return String('0' + secs);
                }
                else {
                    return String(secs);
                }
            }
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
                var date = new Date();
                var min = date.getMinutes();
                return String(min);
            },
			DblDigit: function(){
                var date = new Date();
                var min = date.getMinutes();
                if(min < 10) {
                    return String('0' + min);
                }
                else {
                    return String(min);
                }
            }
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
                var date = new Date();
                var hr = date.getHours();
                return String(hr);
            },
			TwelveHour: function() {
                var date = new Date();
                var hr = date.getHours();
                if(hr > 12){
                    return String(hr - 12);
                }
                if(hr == 0) {
                    return String(12);
                }
                else {
                return String(hr);
                }
            },
			AMPM: (function() {
				return {
					UpperCase: function(){
                        var date = new Date();
                        var blah = date.getHours();
                        if(blah >= 12) {
                            return String('PM');
                        }
                        if(blah < 12) {
                            return String('AM');
                        }
                    },
					LowerCase: function(){
                        var date = new Date();
                        var blah = date.getHours();
                        if(blah >= 12) {
                            return String('pm');
                        }
                        if(blah < 12) {
                            return String('am');
                        }
                    }
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var date = new Date;
                var week = date.getDay();
                var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    return String(weekDays[week]);
                
            },
			AbrDayOfWeek: function(){
                var date = new Date;
                var week = date.getDay();
                var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    return String(weekDays[week]);
                
            },
			FirstTwoOfWeek: function(){var date = new Date;
                var week = date.getDay();
                var weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
                return String(weekDays[week]);
                
                },
			WeekOfYear: function(){
                var now = new Date();
                var start = new Date(now.getFullYear(), 0, 0);
                var diff = now - start;
                var oneWeek = 1000 * 60 * 60 * 24 * 7;
                var day = Math.floor(diff / oneWeek);
                return day.toString();
            }
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
                        var date = new Date();
                        var numb = date.getDate();
                        return String(numb);
                    },
					Ordinal: function(){
                        var date = new Date();
                        var suffix = date.getDate();
                        if(([1, 21, 31]).includes(suffix)){
                            return String(suffix + 'st');
                        }
                        if(([2, 22]).includes(suffix)){
                            return String(suffix + 'nd');
                        }
                        if(([3, 23]).includes(suffix)){
                            return String(suffix + 'rd');
                        }
                        else{
                            return String(suffix + 'th');
                        } 
                    },
					DateDblDigit: function(){
                        var date = new Date();
                        var numb = date.getDate();
                        if(numb < 10) {
                            return String('0' + numb);
                        }
                        else {
                            return String(numb);
                        }
                    }
				}
			})(),
			// MonthNumber: function(){ return String(new Date().getMonth() + 1);},
            MonthNumber: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                return String(month);
            },
			MonthNumberDblDigit: function(){
                var date = new Date();
                var month = date.getMonth()  +1;
                if(month < 10) {
                    return String('0' + month);
                }
                else {
                    return String(month);
                }
            },
			AbrOfCurrentMonth: function(){
                var date = new Date;
                var month = date.getMonth();
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                return String(months[month]);
               
            },
			CurrentMonth: function(){
                var date = new Date;
                var month = date.getMonth();
                var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July',
                'August', 'September', 'October', 'November', 'December'];
                return String(months[month]);
               
            }
		}
	})(),
	  Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
                        var now = new Date();
                        var start = new Date(now.getFullYear(), 0, 0);
                        var diff = now - start;
                        var oneDay = 1000 * 60 * 60 * 24;
                        var day = Math.floor(diff / oneDay);
                        return day.toString();
                    },
					Ordinal: function(){
                        var now = new Date();
                        var start = new Date(now.getFullYear(), 0, 0);
                        var diff = now - start;
                        var oneDay = 1000 * 60 * 60 * 24;
                        var day = Math.floor(diff / oneDay);
                        
                        if(([1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121, 131, 141, 151, 161, 171, 181, 191, 201, 221, 231, 241, 251, 261, 271, 281, 291, 301, 321, 331, 341, 351, 361]).includes(day)){
                            return String(day + 'st');
                        }
                        if(([2, 22, 32, 42, 52, 62 ,72, 82, 92, 102, 122, 132, 142, 152, 162, 172, 182, 192, 202, 222, 232, 242, 252, 262, 271, 281, 291, 302, 322, 332, 342, 352, 362]).includes(day)){
                            return String(day + 'nd');
                        }
                        if(([3, 23, 33, 43, 53, 63 ,73, 83, 93, 103, 123, 133, 143, 153, 163, 173, 183, 193, 203, 223, 233, 243, 253, 263, 273, 283, 293, 303, 323, 333, 343, 353, 363]).includes(day)){
                            return String(day + 'rd');
                        }
                        else{
                            return String(day + 'th');
                        }
                        return day.toString();
                    }
				}
			})(),
			YearFull: function(){
                var date = new Date();
                var year = date.getFullYear();
                return String(year);
            },
			YearAbr: function(){
                var date = new Date();
                var year = date.getFullYear();
                if(year < 2015) {
                    return String(year);
                }
                else {
                    return String(16);
                }
            }
		}
	})(),
	Defaults: function(){
       function dates(x) {
            if(x < 10){
                return String('0' + x);      
            }
            else{
                return x;
            };
        };
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hr = date.getHours();
        var min = date.getMinutes();
        var secs = date.getSeconds();
            return String(year + '-' + dates(month) + '-' + dates(day) + 'T' + dates(hr) + ':' + dates(min) + ':' + dates(secs));
     
    }
  }
})();


