//test case works
// Test Case: The test iterates over each entry in videos_genre_mapping using Object.values. For each video, it uses the Array.prototype.some method to check if there is at least one genre that is not zero. The expect statement then checks if this condition is true (i.e., there is at least one non-null encoding for each video).


// Running the Test: Run this test with npm test. It should pass if each video in your mapping has at least one non-zero category.
describe('Video Genre Mapping', () => {
    const videos_genre_mapping = {
      // ... (your videos_genre_mapping object here)
    };
  
    it('should have non-null encoding for each video', () => {
      Object.values(videos_genre_mapping).forEach(genreArray => {
        // Check if at least one genre is not zero (non-null) for each video
        const hasNonNullGenre = genreArray.some(genre => genre !== 0);
        expect(hasNonNullGenre).toBeTruthy();
      });
    });
  });
  describe('Video Genre Mapping for Uniqueness', () => {
    const videos_genre_mapping = {
      // ... (your videos_genre_mapping object here)
    };
  
    it('should have unique genre mappings for each video', () => {
      const allGenreMappings = Object.values(videos_genre_mapping);
      const uniqueGenreMappings = new Set(allGenreMappings.map(mapping => JSON.stringify(mapping)));
  
      expect(uniqueGenreMappings.size).toBe(allGenreMappings.length);
    });
  });
  
  describe('Video Genre Mapping Data Types', () => {
    const videos_genre_mapping = {
      // ... (your videos_genre_mapping object here)
    };
  
    it('should have each genre mapping as an array of numbers', () => {
      Object.values(videos_genre_mapping).forEach(genreArray => {
        expect(Array.isArray(genreArray)).toBeTruthy();
        genreArray.forEach(genre => {
          expect(typeof genre).toBe('number');
        });
      });
    });
  });
  
  describe('Video Genre Mapping', () => {
    const videos_genre_mapping = {
      // ... (your videos_genre_mapping object here)
    };
  
    it('should have non-null encoding for each video', () => {
      Object.values(videos_genre_mapping).forEach(genreArray => {
        // Check if at least one genre is not zero (non-null) for each video
        const hasNonNullGenre = genreArray.some(genre => genre !== 0);
        expect(hasNonNullGenre).toBeTruthy();
      });
    });
  });

  //write more tests for this module check if the video mapping are unique and if the video mapping are not null
  //check if the video mapping are unique and if the video mapping are not null



  