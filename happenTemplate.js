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
                  var date = new Date;
                  var time = date.toLocaleTimeString();
                  return String(time);
              },
	   	    WithOutSeconds: function() {}
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
                // if(month == 0) {
                //     return String('January');
                // }
                // if(month == 1) {
                //     return String('Febuary');
                // }
                if(month == 2) {
                    return String('March', + day, + year);
                }
                
                // if(month == 3) {
                //     return String('April');
                // }
                // if(month == 4) {
                //     return String('May');
                // }
                // if(month == 5) {
                //     return String('June');
                // }
                // if(month == 6) {
                //     return String('July');
                // }
                // if(month == 7) {
                //     return String('August');
                // }
                // if(month == 8) {
                //     return String('September');
                // }
                // if(month == 9) {
                //     return String('October');
                // }
                // if(month == 10) {
                //     return String('November');
                // }
                // if(month == 11) {
                //     return String('December');
                // }
                // else {
                // return String(month);
                // }
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
                if(hr == 13) {
                    return String(1);
                }
                if(hr == 14) {
                    return String(2);
                }
                if(hr == 15) {
                    return String(3);
                }
                if(hr == 16) {
                    return String(4);
                }
                if(hr == 17) {
                    return String(5);
                }
                if(hr == 18) {
                    return String(6);
                }
                if(hr == 19) {
                    return String(7);
                }
                if(hr == 20) {
                    return String(8);
                }
                if(hr == 21) {
                    return String(9);
                }
                if(hr == 22) {
                    return String(10);
                }
                if(hr == 23) {
                    return String(11);
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
                if(week == 0) {
                    return String('Sunday');
                }
                if(week == 1) {
                    return String('Monday');
                }
                if(week == 2) {
                    return String('Tuesday');
                }
                if(week == 3) {
                    return String('Wednesday');
                }
                if(week == 4) {
                    return String('Thursday');
                }
                if(week == 5) {
                    return String('Friday');
                }
                if(week == 6) {
                    return String('Saturday');
                }
                else {
                return String(week);
                }
            },
			AbrDayOfWeek: function(){
                var date = new Date;
                var week = date.getDay();
                if(week == 0) {
                    return String('Sun');
                }
                if(week == 1) {
                    return String('Mon');
                }
                if(week == 2) {
                    return String('Tue');
                }
                if(week == 3) {
                    return String('Wed');
                }
                if(week == 4) {
                    return String('Thur');
                }
                if(week == 5) {
                    return String('Fri');
                }
                if(week == 6) {
                    return String('Sat');
                }
                else {
                return String(week);
                }
            },
			FirstTwoOfWeek: function(){var date = new Date;
                var week = date.getDay();
                if(week == 0) {
                    return String('Su');
                }
                if(week == 1) {
                    return String('Mo');
                }
                if(week == 2) {
                    return String('Tu');
                }
                if(week == 3) {
                    return String('We');
                }
                if(week == 4) {
                    return String('Th');
                }
                if(week == 5) {
                    return String('Fr');
                }
                if(week == 6) {
                    return String('Sa');
                }
                else {
                return String(week);
                }},
			WeekOfYear: function(){}
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
                            return String(suffix);
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
                if(month == 0) {
                    return String('Jan');
                }
                if(month == 1) {
                    return String('Feb');
                }
                if(month == 2) {
                    return String('Mar');
                }
                if(month == 3) {
                    return String('Apr');
                }
                if(month == 4) {
                    return String('May');
                }
                if(month == 5) {
                    return String('Jun');
                }
                if(month == 6) {
                    return String('Jul');
                }
                if(month == 7) {
                    return String('Aug');
                }
                if(month == 8) {
                    return String('Sept');
                }
                if(month == 9) {
                    return String('Oct');
                }
                if(month == 10) {
                    return String('Nov');
                }
                if(month == 11) {
                    return String('Dec');
                }
                else {
                return String(month);
                }
            },
			CurrentMonth: function(){
                var date = new Date;
                var month = date.getMonth();
                if(month == 0) {
                    return String('January');
                }
                if(month == 1) {
                    return String('Febuary');
                }
                if(month == 2) {
                    return String('March');
                }
                if(month == 3) {
                    return String('April');
                }
                if(month == 4) {
                    return String('May');
                }
                if(month == 5) {
                    return String('June');
                }
                if(month == 6) {
                    return String('July');
                }
                if(month == 7) {
                    return String('August');
                }
                if(month == 8) {
                    return String('September');
                }
                if(month == 9) {
                    return String('October');
                }
                if(month == 10) {
                    return String('November');
                }
                if(month == 11) {
                    return String('December');
                }
                else {
                return String(month);
                }
            }
		}
	})(),
	  Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){},
					Ordinal: function(){}
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
        var date = new Date();
        var def = date.toISOString();
        return String(def);
    }
  }
})();

// function daysInFebruary(year) {
//     if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//         // Leap year
//         return 29;
//     } else {
//         // Not a leap year
//         return 28;
//     }
// }

// function dateToDay(date) {
//     var feb = daysInFebruary(date.getFullYear());
//     var aggregateMonths = [0, // January
//                            31, // February
//                            31 + feb, // March
//                            31 + feb + 31, // April
//                            31 + feb + 31 + 30, // May
//                            31 + feb + 31 + 30 + 31, // June
//                            31 + feb + 31 + 30 + 31 + 30, // July
//                            31 + feb + 31 + 30 + 31 + 30 + 31, // August
//                            31 + feb + 31 + 30 + 31 + 30 + 31 + 31, // September
//                            31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30, // October
//                            31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31, // November
//                            31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30, // December
//                          ];
//     return aggregateMonths[date.getMonth()] + date.getDate();
// }
