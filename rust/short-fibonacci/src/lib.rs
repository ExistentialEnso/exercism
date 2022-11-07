/// Create an empty vector
pub fn create_empty() -> Vec<u8> {
    return Vec::new();
}

/// Create a buffer of `count` zeroes.
///
/// Applications often use buffers when serializing data to send over the network.
pub fn create_buffer(count: usize) -> Vec<u8> {
    let mut buffer = Vec::new();

    for i in 0..count {
        buffer.push(0)
    }

    return buffer;
}

/// Create a vector containing the first five elements of the Fibonacci sequence.
///
/// Fibonacci's sequence is the list of numbers where the next number is a sum of the previous two.
/// Its first five elements are `1, 1, 2, 3, 5`.
pub fn fibonacci() -> Vec<u8> {
    let mut buffer = Vec::new();
    let mut prev = (0,0);

    for i in 0..5 {
        if prev.0 == 0 {
            buffer.push(1);
            prev = (prev.1, 1);
        } else {
            buffer.push(prev.0 + prev.1);
            prev = (prev.1, buffer[i]);
        }
    }

    return buffer;
}
