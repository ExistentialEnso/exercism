// This stub file contains items that aren't used yet; feel free to remove this module attribute
// to enable stricter warnings.
#![allow(unused)]

pub fn production_rate_per_hour(speed: u8) -> f64 {
    let success_rate: f64 = match speed {
        1 | 2 | 3 | 4 => 1.0,
        5 | 6 | 7 | 8 => 0.9,
        9 | 10 => 0.77,
        _ => 0.0
    };

    return speed as f64 * success_rate * 221.0;
}

pub fn working_items_per_minute(speed: u8) -> u32 {
    return (production_rate_per_hour(speed)/60_f64) as u32;
}
