//3 test case passed

const { updateUserProfile } = require('./recopy.JS'); // Correct path to your re.js file

describe('updateUserProfile', () => {
  it('should add feedback to userProfile', () => {
    let userProfile = {}; // Create the userProfile object
    updateUserProfile(userProfile, 3, 1); // Pass it to the function
    expect(userProfile).toEqual({ '1': 3 }); // Expect the userProfile to have the feedback added
  });

  it('should not update userProfile if the video is on repeat', () => {
    let userProfile = { '1': 3 }; // Create the userProfile object with existing data
    updateUserProfile(userProfile, 2, 1); // Attempt to update the existing entry
    expect(userProfile['1']).toEqual(3); // The userProfile should remain unchanged
  });

  it('should create a new entry in userProfile for a new video ID', () => {
    let userProfile = { '1': 3 }; // Existing user profile
    const newVideoId = 2; // This ID is not in the existing userProfile
    const newUserFeedback = 4; // Some new feedback
    updateUserProfile(userProfile, newUserFeedback, newVideoId); // Add new feedback
    expect(userProfile[newVideoId]).toEqual(newUserFeedback); // Expect new entry to be created
  });
});


describe('updateUserProfile with Invalid Feedback', () => {
  it('should not update userProfile for invalid feedback values', () => {
    let userProfile = { '1': 3 };
    updateUserProfile(userProfile, 'invalid', 1);
    expect(userProfile['1']).toEqual(3); // Expect no change
  });
});


describe('updateUserProfile with Negative Feedback', () => {
  it('should not update userProfile for negative feedback values', () => {
    let userProfile = { '1': 3 };
    updateUserProfile(userProfile, -1, 1);
    expect(userProfile['1']).toEqual(3); // Expect no change
  });
});

describe('updateUserProfile with Zero Feedback', () => {
  it('should handle zero as a valid feedback value', () => {
    let userProfile = { '1': 3 };
    updateUserProfile(userProfile, 0, 2);
    expect(userProfile['2']).toEqual(0); // Expect zero to be a valid feedback
  });
});

describe('updateUserProfile with Large Feedback Values', () => {
  it('should not update userProfile for overly large feedback values', () => {
    let userProfile = { '1': 3 };
    updateUserProfile(userProfile, 1000, 1);
    expect(userProfile['1']).toEqual(3); // Expect no change
  });
});
