import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>

      <Card />

      {/* Small Buttons */}
      <Button
        title="Small - SM"
        styles="text-sm rounded-sm bg-blue-500 text-white"
      />
      <Button
        title="Small - MD"
        styles="text-sm rounded-md bg-blue-500 text-white"
      />
      <Button
        title="Small - FULL"
        styles="text-sm rounded-full bg-blue-500 text-white"
      />

      {/* Medium Buttons */}
      <Button
        title="Medium - SM"
        styles="text-base rounded-sm bg-green-500 text-white"
      />
      <Button
        title="Medium - MD"
        styles="text-base rounded-md bg-green-500 text-white"
      />
      <Button
        title="Medium - FULL"
        styles="text-base rounded-full bg-green-500 text-white"
      />

      {/* Large Buttons */}
      <Button
        title="Large - SM"
        styles="text-lg rounded-sm bg-red-500 text-white"
      />
      <Button
        title="Large - MD"
        styles="text-lg rounded-md bg-red-500 text-white"
      />
      <Button
        title="Large - FULL"
        styles="text-lg rounded-full bg-red-500 text-white"
      />
    </div>
  );
};
export default Landing;
