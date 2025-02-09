import { post as postSchema } from './schemas/postSchema';
import { execCommand } from './helper';
import { matchers } from 'jest-json-schema';

expect.extend(matchers);

describe("getting a user's upvoted posts", () => {
  const [output, error] = execCommand('getUsersUpvotedPosts', [
    'bereket',
    '--json',
  ]);

  expect(error).toBeNull();

  const data = JSON.parse(output);

  it('yields valid data', () => {
    data.items.forEach((post) => {
      expect(post).toMatchSchema(postSchema);
    });
  });

  it.todo('rejects incomplete requests');
});
