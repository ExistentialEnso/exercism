use std::fmt;

#[derive(Debug)]
pub struct Clock {
    minutesPastMidnight: i32
}

fn normalizeMinutes(minutes: i32) -> i32 {
    let mut newMinutes = minutes;

    while newMinutes >= 1440 {
        newMinutes -= 1440;
    }

    while newMinutes < 0 {
        newMinutes += 1440;
    }

    return newMinutes;
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        Clock {
            minutesPastMidnight: normalizeMinutes((hours * 60) + minutes)
        }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        Clock {
            minutesPastMidnight: normalizeMinutes(self.minutesPastMidnight + minutes)
        }
    }
}

impl fmt::Display for Clock {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{:02}:{:02}", self.minutesPastMidnight/60, self.minutesPastMidnight%60)
    }
}

impl PartialEq for Clock {
    fn eq(&self, other: &Self) -> bool {
        self.minutesPastMidnight == other.minutesPastMidnight
    }
}